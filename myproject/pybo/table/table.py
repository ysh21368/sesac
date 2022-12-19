import pymysql
from pymysql import cursors, Connect
from flask import Flask

con = pymysql.connect(host='localhost', user='root', password='qhdkscjfwj0!',
                      db='pybo', charset='utf8', # 한글처리 (charset = 'utf8')
                      autocommit=True, # 결과 DB 반영 (Insert or update)
                      cursorclass=pymysql.cursors.DictCursor # DB조회시 컬럼명을 동시에 보여줌
                     )
cursor = db.cursors()
sql = "SELECT * FROM answer"

cursor.execute(sql)
result = cursors.fetchone()

print(result)