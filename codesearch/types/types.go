package types

import (
	"fmt"
	"io"
)

type FieldType int32

const (
	TrigramField FieldType = iota
	StringTokenField
	SparseNgramField

	DocIDField = "docid"
)

func (ft FieldType) String() string {
	switch ft {
	case TrigramField:
		return "TrigramToken"
	case StringTokenField:
		return "StringToken"
	default:
		return "UNKNOWN FIELD TYPE"
	}
}

type Field interface {
	Type() FieldType
	Name() string
	Contents() []byte
	Stored() bool
}

type Document interface {
	ID() uint64
	Fields() []string
	Field(string) Field
	// TODO(tylerw): add Boost() float64
}

type Posting interface {
	Docid() uint64
	Positions() []uint64
	Merge(Posting)
}

type DocumentMatch interface {
	Docid() uint64
	FieldNames() []string
	Posting(fieldName string) Posting
}

type Tokenizer interface {
	Reset(io.Reader)
	Next() error

	Type() FieldType
	Ngram() []byte
}

type IndexWriter interface {
	AddDocument(doc Document) error
	DeleteDocument(docID uint64) error
	Flush() error
}

type IndexReader interface {
	GetStoredDocument(docID uint64) (Document, error)
	RawQuery(squery []byte) ([]DocumentMatch, error)
}

type Scorer interface {
	Skip() bool
	Score(docMatch DocumentMatch, doc Document) float64
}

type HighlightedRegion interface {
	FieldName() string
	String() string
	Line() int
	CustomSnippet(linesBefore, linesAfter int) string
}

type Highlighter interface {
	Highlight(doc Document) []HighlightedRegion
}

type Query interface {
	SQuery() []byte
	ParsedQuery() string
	NumResults() int
	GetScorer() Scorer
	GetHighlighter() Highlighter
}

type Searcher interface {
	Search(q Query) ([]Document, error)
}

type NamedField struct {
	ftype  FieldType
	name   string
	buf    []byte
	stored bool
}

func (f NamedField) Type() FieldType  { return f.ftype }
func (f NamedField) Name() string     { return f.name }
func (f NamedField) Contents() []byte { return f.buf }
func (f NamedField) Stored() bool     { return f.stored }
func (f NamedField) String() string {
	var snippet string
	if len(f.buf) < 10 {
		snippet = string(f.buf)
	} else {
		snippet = string(f.buf[:10])
	}
	return fmt.Sprintf("field<type: %v, name: %q, buf: %q>", f.ftype, f.name, snippet)
}
func NewNamedField(ftype FieldType, name string, buf []byte, stored bool) NamedField {
	return NamedField{
		ftype:  ftype,
		name:   name,
		buf:    buf,
		stored: stored,
	}
}

type MapDocument struct {
	id     uint64
	fields map[string]NamedField
}

func (d MapDocument) ID() uint64              { return d.id }
func (d MapDocument) Field(name string) Field { return d.fields[name] }
func (d MapDocument) Fields() []string {
	fieldNames := make([]string, 0, len(d.fields))
	for name := range d.fields {
		fieldNames = append(fieldNames, name)
	}
	return fieldNames
}
func NewMapDocument(id uint64, fieldMap map[string]NamedField) MapDocument {
	return MapDocument{id, fieldMap}
}
