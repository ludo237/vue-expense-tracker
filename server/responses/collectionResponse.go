package responses

import "gitlab.com/ludo237/vue-expense-tracker/models"

// CollectionResponse structure
type CollectionResponse struct {
	Response
	Data []models.Transaction `json:"data"` // empty []
}
