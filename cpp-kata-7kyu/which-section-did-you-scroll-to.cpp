#include <vector>

int get_section_id(int n, std::vector<int> a) {
  int s = 0;
  for(int i = 0; i < a.size(); i++){
    s+= a[i];
    if(n < s) return i;
  }
  return -1;
}
