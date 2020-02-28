package models

// Transaction structure
type Transaction struct {
	Description string  `json:"description,omitempty"`
	Amount      float64 `json:"amount,omitempty"`
}
