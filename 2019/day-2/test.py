import unittest
import main

class ProgramAlarmTest(unittest.TestCase):
  def test_intcode_program(self):
    intcode_programs = [
      [1,0,0,0,99],
      [2,3,0,3,99],
      [2,4,4,5,99,0],
      [1,1,1,4,99,5,6,0,99],
    ]

    expected_outputs = [
      [2,0,0,0,99],
      [2,3,0,6,99],
      [2,4,4,5,99,9801],
      [30,1,1,4,2,5,6,0,99],
    ]

    for idx, program in enumerate(intcode_programs):
      self.assertEqual(main.execute_intcode_program(program), expected_outputs[idx])

if __name__ == '__main__':
  unittest.main()