import math

def calculate_fuel(mass):
  fuel = math.floor(mass / 3) - 2
  if fuel < 0:
    return 0
  else:
    return fuel

def calculate_total(input_file, func):
  f = open(input_file, "r")

  total_fuel = 0
  for line in f:
    total_fuel = func(int(line)) + total_fuel

  return total_fuel

def calculate_fuel_inception(mass):
  if mass <= 0:
    return 0
  
  fuel = calculate_fuel(mass) 
  return fuel + calculate_fuel_inception(fuel)

if __name__ == '__main__':
  total_fuel = calculate_total('input', calculate_fuel)
  print("Total fuel is: " + str(total_fuel))
  total_fuel_inception = calculate_total('input', calculate_fuel_inception)
  print("Total fuel inception is: " + str(total_fuel_inception))
