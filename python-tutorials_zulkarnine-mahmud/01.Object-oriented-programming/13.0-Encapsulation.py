class Person:
    def __init__(self, name, date_of_birth, height):
        self.__name = name
        self.__date_of_birth = date_of_birth
        self.__height = height

    def get_name(self):
        return self.__name

    def set_name(self, name):
        if self.__has_any_number(name):
            print("Sorry person name can't have number")
            return
        self.__name = name

    def __has_any_number(self, name):
        return "0" in name

    def __str__(self):
        return f"Name: {self.__name}, " \
               f"Date of Birth: {self.__date_of_birth}, " \
               f"Height: {self.__height}"


shihab = Person("Shihab", 2002, "5.3 Feet")
saimon = Person("Saimon", 2003, "5.4 Feet")

print(shihab)
print(saimon)

shihab.set_name("Shihab Mahamud")
print(shihab)

shihab.set_name("0Shihab")
print(shihab)
