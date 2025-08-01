v = 30
d = 180
# 異なる型はコンマ区切りで出力できそう
print("t:", d/v)

# 配列
arrayA = [1, 22, 333, 4444, 55555] # 変更できる
print(arrayA[2])
arrayA[2] = 666666 # OK
print(arrayA[2])

tuppleA = (1, 22, 333, 4444, 55555) # 変更できない

# 比較演算子
print (3>2) # true
print (5!=5) # false

# 条件分岐
a = 50
if(a > 50):
    print("50よりも大きい")
elif(a < 50):
    print("50よりも小さい")
else:
    print("50ぴったり")

# 関数を作成する
def myFunction(a, b):
    return a+b

print (myFunction(24, 35))
print (myFunction(12, 11))

# 文字を入力する
myString = input("文字を入力: ")
print(myString)
