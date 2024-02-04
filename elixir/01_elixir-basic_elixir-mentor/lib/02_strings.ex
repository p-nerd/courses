defmodule Strings do
  def octothorp() do
    IO.puts("1 + 3 = #{1 + 3}")
  end

  def escape_characters() do
    IO.puts("\"A\" is the #1st letter of the alphabet\n")
  end

  def multiple_line_string do
    IO.puts("""
    we can type
    multiple line 
    without adding newline syntax
    """)
  end

  def string_module do
    IO.puts(" shihab " |> String.trim() |> String.upcase())
  end
end
