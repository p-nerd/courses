defmodule Math do
  def add(x, y) do
    x + y
  end

  def add2(x, y), do: x + y

  def sub(x, y), do: x - y

  def mul(x, y), do: x * y

  def div2(x, y), do: x / y

  def round_up(value) do
    Float.ceil(value, 2)
  end

  def find_percentage_of_value(percentage, value) do
    # value * (percentage / 100)

    # dec_percent = div(percentage, 100)
    # mul(value, dec_percent)

    percentage
    |> div2(100)
    |> mul(value)
    |> round_up()
  end
end
