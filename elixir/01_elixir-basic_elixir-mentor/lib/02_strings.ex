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
    IO.puts(
      " shihab "
      |> String.trim()
      |> String.upcase()
    )
  end

  def first_letter(value) do
    String.trim(value)
    |> String.first()
  end

  def initial(value) do
    "#{first_letter(value) |> String.capitalize()}. "
  end

  def initials(full_name) do
    list = String.split(full_name, " ")

    Enum.map(list, fn x ->
      initial(x)
    end)
    |> List.to_string()
    |> String.trim()
  end

  def build_saucer() do
    """

                        %%%%%%%%%%%%%%%%%%%%
                   %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
                %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
          ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
      ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    ************************************************************
        ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
           ,,,&&&,,,,,,&&&,,,,,,&&&,,,,,,&&&,,,,,,&&&,,,
                ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

    """
  end

  def display_saucer() do
    IO.puts(build_saucer())
  end
end
