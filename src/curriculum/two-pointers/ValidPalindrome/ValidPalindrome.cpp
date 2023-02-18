#include <iostream>

bool is_palindrome(std::string text) {
  int first = 0;
  int last = text.size() - 1;

  while(first < last) {
    if(text[first] != text[last]) {
      return false;
    }

    first += 1;
    last -= 1;
  }

  return true;
}


int main() {
  
  std::cout << is_palindrome("madam") << "\n";
  std::cout << is_palindrome("ada") << "\n";
  std::cout << is_palindrome("lovelace") << "\n";
  
}