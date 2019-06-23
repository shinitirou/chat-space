# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

## memberテーブル 

|Coloumn|Type|Options| 
|-------|----|-------| 
|user_id|integer|null: false, foreign_key: true| 
|group_id|integer|null: false, foreign_key: true| 

### Association 
- belongs_to :group 
- belongs_to :user 

## USERS テーブル 

|Cloumn|Type|Options| 
|------|----|-------| 
|name|string|index:true,null:false,unque:true| 
|mail|string|null:false| 

### Association 
- has_many :groups,thrugh: members 
- has_many :messages 
- has_many :members 

## GROUP テーブル 
|Cloumn|Type|Option| 
|------|----|------| 
|name|string|index:true,null:false,unique:true| 

### Association 
- has_many :users,thrugh: members 
- has_many :members 

## messageテーブル 
|Cloumn|Tyoe|Option| 
|------|----|------| 
|massage|storing|null:false,| 

### Association 
- belongs_to :users 




* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
