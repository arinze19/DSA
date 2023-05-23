#include <iostream>
#include <algorithm>
#include <vector>

int non_constructible_change(std::vector<int> change_array)
{
    // initialize change counter
    int minimum_change = 0;

    // sort change_array
    std::sort(change_array.begin(), change_array.end());

    // loop through change
    for (int i = 0; i < change_array.size(); i++)
    {
        if (change_array[i] > minimum_change + 1)
        {
            return minimum_change + 1;
        }
        else
        {
            minimum_change += change_array[i];
        }
    }

    return 0;
};

int main()
{
    std::vector<int> input = {1, 2, 5};
    int result = non_constructible_change(input);

    std::cout << result << "\n";
}