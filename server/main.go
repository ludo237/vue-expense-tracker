package main

import (
	"encoding/json"
	"log"
	"net/http"

	"gitlab.com/ludo237/vue-expense-tracker/responses"

	"github.com/gorilla/mux"
)

func HomeHandler(writer http.ResponseWriter, request *http.Request) {
	writer.Header().Set("Content-Type", "application/json")
	writer.WriteHeader(http.StatusOK)

	r := responses.CollectionResponse{}

	jsonEncoder := json.NewEncoder(writer)
	jsonEncoder.Encode(r)

	//io.WriteString(writer, `{"hello": "world"}`)
}

func main() {
	router := mux.NewRouter()

	router.HandleFunc("/", HomeHandler)

	log.Fatal(http.ListenAndServe(":2370", router))
}
