package models

type Wishlist struct {
	ID          int    `json:id gorm:"primaryKey AUTO_INCREMENT"`
	Name        string `json:"name"`
	Merchant_id int    `json:"merchant_id" gorm:"column:merchant_id"`
	Recipes     string `json:"recipes"`
	Steps       string `json:"steps"`
}
