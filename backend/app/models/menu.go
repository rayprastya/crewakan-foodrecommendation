package models

type Menu struct {
	ID          int     `json:"id" gorm:"primaryKey"`
	MerchantID  int     `json:"merchant_id"`
	Name        string  `json:"name"`
	Description string  `json:"description"`
	Price       float64 `json:"price"`
}
