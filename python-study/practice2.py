# クラス・オブジェクト
class myClass():
    def __init__(self, name, age):
        self.name = name
        self.age = age
    def getName(person):
        return person.name
    def getAge(person):
        return person.age
    

man1 = myClass("suzuki", 18)
man2 = myClass("tanaka", 21)
print(myClass.getName(man1))
print(myClass.getName(man2))
