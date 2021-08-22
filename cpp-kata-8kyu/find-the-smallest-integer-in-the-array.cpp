#include <vector>

using namespace std; 

int findSmallest(vector <int> list)
{
  int min = list[0];
  for(int i = 1; i < list.size(); i++)
    if(list[i] < min)
      min = list[i];
  return min;
}
