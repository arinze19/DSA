#include <iostream>
#include <vector>

std::string shuffle_string(std::string s, std::vector<int> indexes)
{
    std::string result = s.substr(0);

    for (int i = 0; i < indexes.size(); i++)
    {
        result[indexes[i]] = s[i];
    }

    return result;
}

int main()
{
    std::string s = "codeleet";
    std::vector<int> indexes = {4, 5, 6, 7, 0, 2, 1, 3};

    std::string result = shuffle_string(s, indexes);
    std::cout << "Your result is " << result << "\n";
}