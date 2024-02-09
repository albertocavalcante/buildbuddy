//go:build tools

package main

import (
	// Device manager
	_ "gitlab.com/arm-research/smarter/smarter-device-manager"

	// Gazelle deps for 'bb fix'
	_ "github.com/pmezard/go-difflib/difflib"

	// rules_webtesting deps
	_ "github.com/gorilla/mux"

	// static analyzers
	_ "github.com/nishanths/exhaustive"
	_ "golang.org/x/tools/go/analysis"
	_ "honnef.co/go/tools/staticcheck"
)
