defmodule MyList do
  def intro do
    # [1, 2, "hello", :world]

    # concatenated and subtracted
    # [1, 2, 3] ++ [3, 4, 5]
    # [1, 2, 3] -- [3, 4, 5]

    # prepended element
    list = [1, 2, 3]
    new = 0
    [new | list]
  end
end
