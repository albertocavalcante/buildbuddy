package flagutil

import (
	"flag"
	"reflect"
	"testing"

	"github.com/google/go-cmp/cmp"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"gopkg.in/yaml.v3"
)

type unsupportedFlagValue struct{}

func (f *unsupportedFlagValue) Set(string) error { return nil }
func (f *unsupportedFlagValue) String() string   { return "" }

type testStruct struct {
	Field  int    `json:"field"`
	Meadow string `json:"meadow"`
}

func replaceFlagsForTesting(t *testing.T) *flag.FlagSet {
	flags := flag.NewFlagSet("test", flag.ContinueOnError)
	defaultFlagSet = flags

	t.Cleanup(func() {
		defaultFlagSet = flag.CommandLine
	})

	return flags
}

func TestStringSliceFlag(t *testing.T) {
	var err error

	flags := replaceFlagsForTesting(t)

	foo := Slice("foo", []string{}, "A list of foos")
	assert.Equal(t, []string{}, *foo)
	assert.Equal(t, []string{}, *(*[]string)(flags.Lookup("foo").Value.(*SliceFlag[string])))
	err = flags.Set("foo", "foo0,foo1")
	assert.NoError(t, err)
	err = flags.Set("foo", "foo2")
	assert.NoError(t, err)
	err = flags.Set("foo", "foo3,foo4,foo5")
	assert.NoError(t, err)
	assert.Equal(t, []string{"foo0", "foo1", "foo2", "foo3", "foo4", "foo5"}, *foo)
	assert.Equal(t, []string{"foo0", "foo1", "foo2", "foo3", "foo4", "foo5"}, *(*[]string)(flags.Lookup("foo").Value.(*SliceFlag[string])))

	bar := Slice("bar", []string{"bar0", "bar1"}, "A list of bars")
	assert.Equal(t, []string{"bar0", "bar1"}, *bar)
	assert.Equal(t, []string{"bar0", "bar1"}, *(*[]string)(flags.Lookup("bar").Value.(*SliceFlag[string])))
	err = flags.Set("bar", "bar2")
	assert.NoError(t, err)
	err = flags.Set("bar", "bar3,bar4,bar5")
	assert.NoError(t, err)
	assert.Equal(t, []string{"bar0", "bar1", "bar2", "bar3", "bar4", "bar5"}, *bar)
	assert.Equal(t, []string{"bar0", "bar1", "bar2", "bar3", "bar4", "bar5"}, *(*[]string)(flags.Lookup("bar").Value.(*SliceFlag[string])))

	baz := Slice("baz", []string{}, "A list of bazs")
	err = flags.Set("baz", flags.Lookup("bar").Value.String())
	assert.NoError(t, err)
	assert.Equal(t, *bar, *baz)

	testSlice := []string{"yes", "si", "hai"}
	testFlag := NewSliceFlag(&testSlice)
	testFlag.AppendSlice(*(*[]string)(testFlag))
	assert.Equal(t, []string{"yes", "si", "hai", "yes", "si", "hai"}, testSlice)
}

func TestStructSliceFlag(t *testing.T) {
	var err error

	flags := replaceFlagsForTesting(t)

	fooFlag := Slice("foo", []testStruct{}, "A list of foos")
	assert.Equal(t, []testStruct{}, *fooFlag)
	assert.Equal(t, []testStruct{}, *(*[]testStruct)(flags.Lookup("foo").Value.(*SliceFlag[testStruct])))
	err = flags.Set("foo", `[{"field":3,"meadow":"watership down"}]`)
	assert.NoError(t, err)
	assert.Equal(t, []testStruct{{Field: 3, Meadow: "watership down"}}, *fooFlag)
	assert.Equal(t, []testStruct{{Field: 3, Meadow: "watership down"}}, *(*[]testStruct)(flags.Lookup("foo").Value.(*SliceFlag[testStruct])))
	err = flags.Set("foo", `{"field":5,"meadow":"runnymede"}`)
	assert.NoError(t, err)
	assert.Equal(t, []testStruct{{Field: 3, Meadow: "watership down"}, {Field: 5, Meadow: "runnymede"}}, *fooFlag)
	assert.Equal(t, []testStruct{{Field: 3, Meadow: "watership down"}, {Field: 5, Meadow: "runnymede"}}, *(*[]testStruct)(flags.Lookup("foo").Value.(*SliceFlag[testStruct])))

	barFlag := []testStruct{{Field: 11, Meadow: "arcadia"}, {Field: 13, Meadow: "kingcombe"}}
	SliceVar(&barFlag, "bar", "A list of bars")
	assert.Equal(t, []testStruct{{Field: 11, Meadow: "arcadia"}, {Field: 13, Meadow: "kingcombe"}}, barFlag)
	assert.Equal(t, []testStruct{{Field: 11, Meadow: "arcadia"}, {Field: 13, Meadow: "kingcombe"}}, *(*[]testStruct)(flags.Lookup("bar").Value.(*SliceFlag[testStruct])))

	fooxFlag := Slice("foox", []testStruct{}, "A list of fooxes")
	assert.Equal(t, []testStruct{}, *fooxFlag)
	assert.Equal(t, []testStruct{}, *(*[]testStruct)(flags.Lookup("foox").Value.(*SliceFlag[testStruct])))
	err = flags.Set("foox", `[{"field":13,"meadow":"cors y llyn"},{},{"field":15}]`)
	assert.NoError(t, err)
	assert.Equal(t, []testStruct{{Field: 13, Meadow: "cors y llyn"}, {}, {Field: 15}}, *fooxFlag)
	assert.Equal(t, []testStruct{{Field: 13, Meadow: "cors y llyn"}, {}, {Field: 15}}, *(*[]testStruct)(flags.Lookup("foox").Value.(*SliceFlag[testStruct])))
	err = flags.Set("foox", `[{"field":17,"meadow":"red hill"},{},{"field":19}]`)
	assert.NoError(t, err)
	assert.Equal(t, []testStruct{{Field: 13, Meadow: "cors y llyn"}, {}, {Field: 15}, {Field: 17, Meadow: "red hill"}, {}, {Field: 19}}, *fooxFlag)
	assert.Equal(t, []testStruct{{Field: 13, Meadow: "cors y llyn"}, {}, {Field: 15}, {Field: 17, Meadow: "red hill"}, {}, {Field: 19}}, *(*[]testStruct)(flags.Lookup("foox").Value.(*SliceFlag[testStruct])))

	bazFlag := []testStruct{}
	SliceVar(&bazFlag, "baz", "A list of bazs")
	err = flags.Set("baz", flags.Lookup("bar").Value.String())
	assert.NoError(t, err)
	assert.Equal(t, barFlag, bazFlag)

	testSlice := []testStruct{{}, {Field: 1}, {Meadow: "Paradise"}}
	testFlag := NewSliceFlag(&testSlice)
	testFlag.AppendSlice(*(*[]testStruct)(testFlag))
	assert.Equal(t, []testStruct{{}, {Field: 1}, {Meadow: "Paradise"}, {}, {Field: 1}, {Meadow: "Paradise"}}, testSlice)
}

func TestGenerateYAMLTypeMapFromFlags(t *testing.T) {
	flags := replaceFlagsForTesting(t)

	flags.Bool("bool", true, "")
	flags.Int("one.two.int", 10, "")
	Slice("one.two.string_slice", []string{"hi", "hello"}, "")
	flags.Float64("one.two.two_and_a_half.float64", 5.2, "")
	Slice("one.two.three.struct_slice", []testStruct{{Field: 4, Meadow: "Great"}}, "")
	flags.String("a.b.string", "xxx", "")
	URLString("a.b.url", "https://www.example.com", "")
	actual, err := GenerateYAMLTypeMapFromFlags()
	require.NoError(t, err)
	expected := map[string]any{
		"bool": reflect.TypeOf(false),
		"one": map[string]any{
			"two": map[string]any{
				"int":          reflect.TypeOf(int(0)),
				"string_slice": reflect.TypeOf(([]string)(nil)),
				"two_and_a_half": map[string]any{
					"float64": reflect.TypeOf(float64(0)),
				},
				"three": map[string]any{
					"struct_slice": reflect.TypeOf(([]testStruct)(nil)),
				},
			},
		},
		"a": map[string]any{
			"b": map[string]any{
				"string": reflect.TypeOf(""),
				"url":    reflect.TypeOf(URLFlag("")),
			},
		},
	}
	if diff := cmp.Diff(expected, actual, cmp.Comparer(func(x, y reflect.Type) bool { return x == y })); diff != "" {
		t.Error(diff)
	}
}

func TestBadGenerateYAMLTypeMapFromFlags(t *testing.T) {
	flags := replaceFlagsForTesting(t)

	flags.Int("one.two.int", 10, "")
	flags.Int("one.two", 10, "")
	_, err := GenerateYAMLTypeMapFromFlags()
	require.Error(t, err)

	flags = replaceFlagsForTesting(t)

	flags.Int("one.two", 10, "")
	flags.Int("one.two.int", 10, "")
	_, err = GenerateYAMLTypeMapFromFlags()
	require.Error(t, err)

	flags = replaceFlagsForTesting(t)

	flags.Var(&unsupportedFlagValue{}, "unsupported", "")
	_, err = GenerateYAMLTypeMapFromFlags()
	require.Error(t, err)

}

func TestRetypeAndFilterYAMLMap(t *testing.T) {
	typeMap := map[string]any{
		"bool": reflect.TypeOf(false),
		"one": map[string]any{
			"two": map[string]any{
				"int":          reflect.TypeOf(int(0)),
				"string_slice": reflect.TypeOf(([]string)(nil)),
				"two_and_a_half": map[string]any{
					"float64": reflect.TypeOf(float64(0)),
				},
				"three": map[string]any{
					"struct_slice": reflect.TypeOf(([]testStruct)(nil)),
				},
			},
		},
		"a": map[string]any{
			"b": map[string]any{
				"string": reflect.TypeOf(""),
				"url":    reflect.TypeOf(URLFlag("")),
			},
		},
		"foo": map[string]any{
			"bar": reflect.TypeOf(int64(0)),
		},
	}
	yamlData := `
bool: true
one:
  two:
    int: 1
    string_slice:
      - "string1"
      - "string2"
    two_and_a_half:
      float64: 9.4
    three:
      struct_slice:
        - field: 9
          meadow: "Eternal"
        - field: 5
a:
  b:
    url: "www.example.com"
foo: 7
first:
  second:
    unknown: 9009
    no: "definitely not"
`
	yamlMap := make(map[string]any)
	err := yaml.Unmarshal([]byte(yamlData), yamlMap)
	require.NoError(t, err)
	err = RetypeAndFilterYAMLMap(yamlMap, typeMap, []string{})
	require.NoError(t, err)
	expected := map[string]any{
		"bool": true,
		"one": map[string]any{
			"two": map[string]any{
				"int":          int(1),
				"string_slice": []string{"string1", "string2"},
				"two_and_a_half": map[string]any{
					"float64": float64(9.4),
				},
				"three": map[string]any{
					"struct_slice": []testStruct{{Field: 9, Meadow: "Eternal"}, {Field: 5}},
				},
			},
		},
		"a": map[string]any{
			"b": map[string]any{
				"url": URLFlag("www.example.com"),
			},
		},
	}
	if diff := cmp.Diff(expected, yamlMap); diff != "" {
		t.Error(diff)
	}
}

func TestBadRetypeAndFilterYAMLMap(t *testing.T) {
	typeMap := map[string]any{
		"bool": reflect.TypeOf(false),
	}
	yamlData := `
bool: 7
`
	yamlMap := make(map[string]any)
	err := yaml.Unmarshal([]byte(yamlData), yamlMap)
	require.NoError(t, err)
	err = RetypeAndFilterYAMLMap(yamlMap, typeMap, []string{})
	require.Error(t, err)

	typeMap = map[string]any{
		"bool": false,
	}
	yamlData = `
bool: true
`
	yamlMap = make(map[string]any)
	err = yaml.Unmarshal([]byte(yamlData), yamlMap)
	require.NoError(t, err)
	err = RetypeAndFilterYAMLMap(yamlMap, typeMap, []string{})
	require.Error(t, err)
}

func TestPopulateFlagsFromData(t *testing.T) {
	flags := replaceFlagsForTesting(t)

	flagBool := flags.Bool("bool", true, "")
	flagOneTwoInt := flags.Int("one.two.int", 10, "")
	flagOneTwoStringSlice := Slice("one.two.string_slice", []string{"hi", "hello"}, "")
	flagOneTwoTwoAndAHalfFloat := flags.Float64("one.two.two_and_a_half.float64", 5.2, "")
	flagOneTwoThreeStructSlice := []testStruct{{Field: 4, Meadow: "Great"}}
	SliceVar(&flagOneTwoThreeStructSlice, "one.two.three.struct_slice", "")
	flagABString := flags.String("a.b.string", "xxx", "")
	flagABStructSlice := []testStruct{{Field: 7, Meadow: "Chimney"}}
	SliceVar(&flagABStructSlice, "a.b.struct_slice", "")
	flagABURL := URLString("a.b.url", "https://www.example.com", "")
	yamlData := `
bool: true
one:
  two:
    int: 1
    string_slice:
      - "string1"
      - "string2"
    two_and_a_half:
      float64: 9.4
    three:
      struct_slice:
        - field: 9
          meadow: "Eternal"
        - field: 5
a:
  b:
    url: "www.example.com:8080"
foo: 7
first:
  second:
    unknown: 9009
    no: "definitely not"
`
	err := PopulateFlagsFromData([]byte(yamlData))
	require.NoError(t, err)
	assert.Equal(t, true, *flagBool)
	assert.Equal(t, int(1), *flagOneTwoInt)
	assert.Equal(t, []string{"hi", "hello", "string1", "string2"}, *flagOneTwoStringSlice)
	assert.Equal(t, float64(9.4), *flagOneTwoTwoAndAHalfFloat)
	assert.Equal(t, []testStruct{{Field: 4, Meadow: "Great"}, {Field: 9, Meadow: "Eternal"}, {Field: 5}}, flagOneTwoThreeStructSlice)
	assert.Equal(t, "xxx", *flagABString)
	assert.Equal(t, []testStruct{{Field: 7, Meadow: "Chimney"}}, flagABStructSlice)
	assert.Equal(t, "www.example.com:8080", *flagABURL)
}

func TestBadPopulateFlagsFromData(t *testing.T) {
	_ = replaceFlagsForTesting(t)

	yamlData := `
	bool: true
`
	err := PopulateFlagsFromData([]byte(yamlData))
	require.Error(t, err)

	flags := replaceFlagsForTesting(t)

	flags.Var(&unsupportedFlagValue{}, "bad", "")
	err = PopulateFlagsFromData([]byte{})
	require.Error(t, err)

	flags = replaceFlagsForTesting(t)

	_ = flags.Bool("bool", false, "")
	yamlData = `
bool: 7
`
	err = PopulateFlagsFromData([]byte(yamlData))
	require.Error(t, err)
}

func TestPopulateFlagsFromYAML(t *testing.T) {
	flags := replaceFlagsForTesting(t)

	flagBool := flags.Bool("bool", true, "")
	flagOneTwoInt := flags.Int("one.two.int", 10, "")
	flagOneTwoStringSlice := Slice("one.two.string_slice", []string{"hi", "hello"}, "")
	flagOneTwoTwoAndAHalfFloat := flags.Float64("one.two.two_and_a_half.float64", 5.2, "")
	flagOneTwoThreeStructSlice := []testStruct{{Field: 4, Meadow: "Great"}}
	SliceVar(&flagOneTwoThreeStructSlice, "one.two.three.struct_slice", "")
	flagABString := flags.String("a.b.string", "xxx", "")
	flagABStructSlice := []testStruct{{Field: 7, Meadow: "Chimney"}}
	SliceVar(&flagABStructSlice, "a.b.struct_slice", "")
	flagABURL := URLString("a.b.url", "https://www.example.com", "")
	input := map[string]any{
		"bool": false,
		"one": map[string]any{
			"two": map[string]any{
				"string_slice": []string{"meow", "woof"},
				"two_and_a_half": map[string]any{
					"float64": float64(7),
				},
				"three": map[string]any{
					"struct_slice": ([]testStruct)(nil),
				},
			},
		},
		"a": map[string]any{
			"b": map[string]any{
				"string":       "",
				"struct_slice": []testStruct{{Field: 9}},
				"url":          URLFlag("https://www.example.com:8080"),
			},
		},
		"undefined": struct{}{}, // keys without with no corresponding flag name should be ignored.
	}
	err := PopulateFlagsFromYAMLMap(input)
	require.NoError(t, err)

	assert.Equal(t, false, *flagBool)
	assert.Equal(t, 10, *flagOneTwoInt)
	assert.Equal(t, []string{"hi", "hello", "meow", "woof"}, *flagOneTwoStringSlice)
	assert.Equal(t, float64(7), *flagOneTwoTwoAndAHalfFloat)
	assert.Equal(t, []testStruct{{Field: 4, Meadow: "Great"}}, flagOneTwoThreeStructSlice)
	assert.Equal(t, "", *flagABString)
	assert.Equal(t, []testStruct{{Field: 7, Meadow: "Chimney"}, {Field: 9}}, flagABStructSlice)
	assert.Equal(t, "https://www.example.com:8080", *flagABURL)
}

func TestBadPopulateFlagsFromYAML(t *testing.T) {
	_ = replaceFlagsForTesting(t)

	flags := replaceFlagsForTesting(t)
	flags.Var(&unsupportedFlagValue{}, "unsupported", "")
	err := PopulateFlagsFromYAMLMap(map[string]any{
		"unsupported": 0,
	})
	require.Error(t, err)

	flags = replaceFlagsForTesting(t)
	flags.Bool("bool", false, "")
	err = PopulateFlagsFromYAMLMap(map[string]any{
		"bool": 0,
	})
	require.Error(t, err)
}

func TestSetValueForFlagName(t *testing.T) {
	flags := replaceFlagsForTesting(t)
	flagBool := flags.Bool("bool", false, "")
	err := SetValueForFlagName("bool", true, map[string]struct{}{}, true, true)
	require.NoError(t, err)
	assert.Equal(t, true, *flagBool)

	flags = replaceFlagsForTesting(t)
	flagBool = flags.Bool("bool", false, "")
	err = SetValueForFlagName("bool", true, map[string]struct{}{"bool": struct{}{}}, true, true)
	require.NoError(t, err)
	assert.Equal(t, false, *flagBool)

	flags = replaceFlagsForTesting(t)
	err = SetValueForFlagName("bool", true, map[string]struct{}{}, true, false)
	require.NoError(t, err)

	flags = replaceFlagsForTesting(t)
	flagInt := flags.Int("int", 2, "")
	err = SetValueForFlagName("int", 1, map[string]struct{}{}, true, true)
	require.NoError(t, err)
	assert.Equal(t, 1, *flagInt)

	flags = replaceFlagsForTesting(t)
	flagInt = flags.Int("int", 2, "")
	err = SetValueForFlagName("int", 1, map[string]struct{}{"int": struct{}{}}, true, true)
	require.NoError(t, err)
	assert.Equal(t, 2, *flagInt)

	flags = replaceFlagsForTesting(t)
	flagInt64 := flags.Int64("int64", 2, "")
	err = SetValueForFlagName("int64", 1, map[string]struct{}{}, true, true)
	require.NoError(t, err)
	assert.Equal(t, int64(1), *flagInt64)

	flags = replaceFlagsForTesting(t)
	flagInt64 = flags.Int64("int64", 2, "")
	err = SetValueForFlagName("int64", 1, map[string]struct{}{"int64": struct{}{}}, true, true)
	require.NoError(t, err)
	assert.Equal(t, int64(2), *flagInt64)

	flags = replaceFlagsForTesting(t)
	flagUint := flags.Uint("uint", 2, "")
	err = SetValueForFlagName("uint", 1, map[string]struct{}{}, true, true)
	require.NoError(t, err)
	assert.Equal(t, uint(1), *flagUint)

	flags = replaceFlagsForTesting(t)
	flagUint = flags.Uint("uint", 2, "")
	err = SetValueForFlagName("uint", 1, map[string]struct{}{"uint": struct{}{}}, true, true)
	require.NoError(t, err)
	assert.Equal(t, uint(2), *flagUint)

	flags = replaceFlagsForTesting(t)
	flagUint64 := flags.Uint64("uint64", 2, "")
	err = SetValueForFlagName("uint64", 1, map[string]struct{}{}, true, true)
	require.NoError(t, err)
	assert.Equal(t, uint64(1), *flagUint64)

	flags = replaceFlagsForTesting(t)
	flagUint64 = flags.Uint64("uint64", 2, "")
	err = SetValueForFlagName("uint64", 1, map[string]struct{}{"uint64": struct{}{}}, true, true)
	require.NoError(t, err)
	assert.Equal(t, uint64(2), *flagUint64)

	flags = replaceFlagsForTesting(t)
	flagFloat64 := flags.Float64("float64", 2, "")
	err = SetValueForFlagName("float64", 1, map[string]struct{}{}, true, true)
	require.NoError(t, err)
	assert.Equal(t, float64(1), *flagFloat64)

	flags = replaceFlagsForTesting(t)
	flagFloat64 = flags.Float64("float64", 2, "")
	err = SetValueForFlagName("float64", 1, map[string]struct{}{"float64": struct{}{}}, true, true)
	require.NoError(t, err)
	assert.Equal(t, float64(2), *flagFloat64)

	flags = replaceFlagsForTesting(t)
	flagString := flags.String("string", "2", "")
	err = SetValueForFlagName("string", "1", map[string]struct{}{}, true, true)
	require.NoError(t, err)
	assert.Equal(t, "1", *flagString)

	flags = replaceFlagsForTesting(t)
	flagString = flags.String("string", "2", "")
	err = SetValueForFlagName("string", "1", map[string]struct{}{"string": struct{}{}}, true, true)
	require.NoError(t, err)
	assert.Equal(t, "2", *flagString)

	flags = replaceFlagsForTesting(t)
	flagURL := URLString("url", "https://www.example.com", "")
	err = SetValueForFlagName("url", "https://www.example.com:8080", map[string]struct{}{}, true, true)
	require.NoError(t, err)
	assert.Equal(t, "https://www.example.com:8080", *flagURL)

	flags = replaceFlagsForTesting(t)
	flagURL = URLString("url", "https://www.example.com", "")
	err = SetValueForFlagName("url", "https://www.example.com:8080", map[string]struct{}{"url": struct{}{}}, true, true)
	require.NoError(t, err)
	assert.Equal(t, "https://www.example.com", *flagURL)

	flags = replaceFlagsForTesting(t)
	string_slice := make([]string, 2)
	string_slice[0] = "1"
	string_slice[1] = "2"
	SliceVar(&string_slice, "string_slice", "")
	err = SetValueForFlagName("string_slice", []string{"3", "4", "5", "6", "7", "8", "9", "0", "1", "2"}, map[string]struct{}{}, true, true)
	require.NoError(t, err)
	assert.Equal(t, []string{"1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2"}, string_slice)

	flags = replaceFlagsForTesting(t)
	flagStringSlice := Slice("string_slice", []string{"1", "2"}, "")
	err = SetValueForFlagName("string_slice", []string{"3"}, map[string]struct{}{"string_slice": struct{}{}}, true, true)
	require.NoError(t, err)
	assert.Equal(t, []string{"1", "2", "3"}, *flagStringSlice)

	flags = replaceFlagsForTesting(t)
	flagStringSlice = Slice("string_slice", []string{"1", "2"}, "")
	err = SetValueForFlagName("string_slice", []string{"3"}, map[string]struct{}{}, false, true)
	require.NoError(t, err)
	assert.Equal(t, []string{"3"}, *flagStringSlice)

	flags = replaceFlagsForTesting(t)
	flagStringSlice = Slice("string_slice", []string{"1", "2"}, "")
	err = SetValueForFlagName("string_slice", []string{"3"}, map[string]struct{}{"string_slice": struct{}{}}, false, true)
	require.NoError(t, err)
	assert.Equal(t, []string{"1", "2"}, *flagStringSlice)

	flags = replaceFlagsForTesting(t)
	flagStructSlice := []testStruct{{Field: 1}, {Field: 2}}
	SliceVar(&flagStructSlice, "struct_slice", "")
	err = SetValueForFlagName("struct_slice", []testStruct{{Field: 3}}, map[string]struct{}{}, true, true)
	require.NoError(t, err)
	assert.Equal(t, []testStruct{{Field: 1}, {Field: 2}, {Field: 3}}, flagStructSlice)

	flags = replaceFlagsForTesting(t)
	flagStructSlice = []testStruct{{Field: 1}, {Field: 2}}
	SliceVar(&flagStructSlice, "struct_slice", "")
	err = SetValueForFlagName("struct_slice", []testStruct{{Field: 3}}, map[string]struct{}{"struct_slice": struct{}{}}, true, true)
	require.NoError(t, err)
	assert.Equal(t, []testStruct{{Field: 1}, {Field: 2}, {Field: 3}}, flagStructSlice)

	flags = replaceFlagsForTesting(t)
	flagStructSlice = []testStruct{{Field: 1}, {Field: 2}}
	SliceVar(&flagStructSlice, "struct_slice", "")
	err = SetValueForFlagName("struct_slice", []testStruct{{Field: 3}}, map[string]struct{}{}, false, true)
	require.NoError(t, err)
	assert.Equal(t, []testStruct{{Field: 3}}, flagStructSlice)

	flags = replaceFlagsForTesting(t)
	flagStructSlice = []testStruct{{Field: 1}, {Field: 2}}
	SliceVar(&flagStructSlice, "struct_slice", "")
	err = SetValueForFlagName("struct_slice", []testStruct{{Field: 3}}, map[string]struct{}{"struct_slice": struct{}{}}, false, true)
	require.NoError(t, err)
	assert.Equal(t, []testStruct{{Field: 1}, {Field: 2}}, flagStructSlice)
}

func TestBadSetValueForFlagName(t *testing.T) {
	flags := replaceFlagsForTesting(t)
	_ = flags.Bool("bool", false, "")
	err := SetValueForFlagName("bool", 0, map[string]struct{}{}, true, true)
	require.Error(t, err)

	flags = replaceFlagsForTesting(t)
	err = SetValueForFlagName("bool", false, map[string]struct{}{}, true, true)
	require.Error(t, err)

	flags = replaceFlagsForTesting(t)
	_ = Slice("string_slice", []string{"1", "2"}, "")
	err = SetValueForFlagName("string_slice", "3", map[string]struct{}{}, true, true)
	require.Error(t, err)

	flags = replaceFlagsForTesting(t)
	_ = Slice("string_slice", []string{"1", "2"}, "")
	err = SetValueForFlagName("string_slice", "3", map[string]struct{}{}, false, true)
	require.Error(t, err)

	flags = replaceFlagsForTesting(t)
	flagStructSlice := []testStruct{{Field: 1}, {Field: 2}}
	SliceVar(&flagStructSlice, "struct_slice", "")
	err = SetValueForFlagName("struct_slice", testStruct{Field: 3}, map[string]struct{}{}, true, true)
	require.Error(t, err)

	flags = replaceFlagsForTesting(t)
	flagStructSlice = []testStruct{{Field: 1}, {Field: 2}}
	SliceVar(&flagStructSlice, "struct_slice", "")
	err = SetValueForFlagName("struct_slice", testStruct{Field: 3}, map[string]struct{}{}, false, true)
	require.Error(t, err)
}

func TestDereferencedValueFromFlagName(t *testing.T) {
	flags := replaceFlagsForTesting(t)
	_ = flags.Bool("bool", false, "")
	v, err := GetDereferencedValue[bool]("bool")
	require.NoError(t, err)
	assert.Equal(t, false, v)

	flags = replaceFlagsForTesting(t)
	_ = flags.Bool("bool", true, "")
	v, err = GetDereferencedValue[bool]("bool")
	require.NoError(t, err)
	assert.Equal(t, true, v)

	flags = replaceFlagsForTesting(t)
	_ = Slice("string_slice", []string{"1", "2"}, "")
	stringSlice, err := GetDereferencedValue[[]string]("string_slice")
	require.NoError(t, err)
	assert.Equal(t, []string{"1", "2"}, stringSlice)

	flags = replaceFlagsForTesting(t)
	SliceVar(&[]testStruct{{Field: 1}, {Field: 2}}, "struct_slice", "")
	structSlice, err := GetDereferencedValue[[]testStruct]("struct_slice")
	require.NoError(t, err)
	assert.Equal(t, []testStruct{{Field: 1}, {Field: 2}}, structSlice)
}

func TestBadDereferencedValueFromFlagName(t *testing.T) {
	_ = replaceFlagsForTesting(t)
	_, err := GetDereferencedValue[any]("unknown_flag")
	require.Error(t, err)
}
