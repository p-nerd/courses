defmodule MathTest do
  use ExUnit.Case
  doctest Math

  test "add 2, 3 equal 5" do
    assert BasicMath.add(2, 3) == 5
  end
end
