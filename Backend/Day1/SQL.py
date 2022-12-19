from pymysql import cursors, connect



db = connect(host='localhost',
            user='root',
            password='qhdkscjfwj0!',
            database='test')
cursors = db.cursor()

sql = 'SELECT * FROM test1;'

cursors.execute(sql) #실행

result = cursors.fetchall() # 

print(result)


