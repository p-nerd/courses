defmodule PlayTest do
  use ExUnit.Case
  doctest Play

  test "greets the world" do
    assert Play.hello() == :world
  end
end
