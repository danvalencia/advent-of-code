import unittest
import main

class FuelCalculatorTest(unittest.TestCase):
  def test_fuel_calculation(self):
    self.assertEqual(main.calculate_fuel(12), 2)
    self.assertEqual(main.calculate_fuel(14), 2)
    self.assertEqual(main.calculate_fuel(1969), 654)
    self.assertEqual(main.calculate_fuel(100756), 33583)

  def test_total_fuel_calculation(self):
    self.assertEqual(main.calculate_total('input', main.calculate_fuel), 3249140)

  def test_fuel_inception_calculation(self):
    self.assertEqual(main.calculate_fuel_inception(12), 2)
    self.assertEqual(main.calculate_fuel_inception(1969), 966)
    self.assertEqual(main.calculate_fuel_inception(100756), 50346)

if __name__ == '__main__':
    unittest.main()