#include <iostream>
#include <vector>
#include <cmath>

int binary_search(std::vector<int> input, int target)
{
    int result = -1, mid = floor(input.size() / 2);

    while (mid != 0)
    {
        if (input[mid] == target)
        {
            result = mid;
            return result;
        }
        else
        {
            mid = floor(mid / 2);
        }
    }

    return result;
}

int main()
{
    std::vector<int> input = {1, 2, 3, 4, 5};
    int target = 3;

    int index = binary_search(input, target);
    std::cout << "Your target element is at index " << index << "\n";
}