# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

## membersテーブル 

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

## GROUPS テーブル 
|Cloumn|Type|Option| 
|------|----|------| 
|name|string|index:true,null:false,unique:true| 

### Association 
- has_many :users,thrugh: members 
- has_many :members 
- has_many :messages

## messagesテーブル 
|Cloumn|Type|Option| 
|------|----|------| 
|content|string|null:false,| 
|image|string|
|user_id|integer|null:false,foreign_key: true|
|group_id|integer|null:false,foreign_key: true|

### Association 
- belongs_to :user
- belongs_to :group
