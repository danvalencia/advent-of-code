SUM = 1
MULTIPLY = 2

def execute_intcode_program(intcode):
  curr_idx = 0
  op_code = intcode[curr_idx]

  while op_code != 99 or curr_idx >= len(intcode) :
    first_pos = intcode[curr_idx + 1]
    second_pos = intcode[curr_idx + 2]
    target_pos = intcode[curr_idx + 3]

    if op_code == SUM:
      intcode[target_pos] = intcode[first_pos] + intcode[second_pos]
    elif op_code == MULTIPLY:
      intcode[target_pos] = intcode[first_pos] * intcode[second_pos]

    curr_idx = curr_idx + 4
    op_code = intcode[curr_idx]

  return intcode

def read_from_file(file_name):
  f = open(file_name, 'r')
  line = f.readline()
  return list(map(int, line.split(",")))

def execute_from_file(file_name):
  intcode = read_from_file(file_name)
  intcode[1] = 12
  intcode[2] = 2
  result = execute_intcode_program(intcode)
  print("Position 0 has value: " + str(result[0]))

def find_output(num):
  initial_memory = read_from_file("input")
  
  for noun in range(0, 100):
    for verb in range(0, 100):
      memory = initial_memory.copy()
      memory[1] = noun
      memory[2] = verb
      output = execute_intcode_program(memory)
      if num == output[0]:
        print("(nount, verb) -> (" + str(noun) + ", " + str(verb) + ")")
        print("100 * noun + verb = " + str(100 * noun + verb))
        return


if __name__ == '__main__':
  find_output(19690720)
