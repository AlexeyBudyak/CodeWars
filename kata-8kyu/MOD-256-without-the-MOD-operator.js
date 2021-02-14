function mod256WithoutMod(number)
{
  return number - ~~(number/256)*256;
}
