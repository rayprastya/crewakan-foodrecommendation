package models

type Merchant struct {
	ID   int     `json:id gorm:"primaryKey AUTO_INCREMENT"`
	Name string  `json:"Name" gorm:"unique"`
	Lat  float64 `json:"lat"`
	Lng  float64 `json:"lng"`
}
