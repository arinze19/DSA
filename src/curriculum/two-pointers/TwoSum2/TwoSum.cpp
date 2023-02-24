#include <iostream>
#include <map>
#include <vector>

int twoSum(std::vector<int> nums, int target)
{
    std::map<int, int> map;

    for (int i = 0; i < nums.size(); i++)
    {
        map.insert(target - nums[i], i + 1);
        std::cout << map[i] << "\n";
        // std::map<int, int>::iterator idx1 = map.find(target - nums[i]);
    }

    return 0;
}

int main()
{
    std::vector<int> numbers;
    numbers[0] = 1;
    numbers[1] = 2;
    twoSum(numbers, 9);
}