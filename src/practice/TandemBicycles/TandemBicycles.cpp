#include <iostream>
#include <vector>
#include <cmath>
#include <algorithm>

int tandem_bicycles(std::vector<int> red_bikes, std::vector<int> blue_bikes, bool fastest)
{
    // sort red_bikes in descending order
    // if fastest is false, sort blue_bikes in descending order and take max
    // if fastest is true, sort blue_bikes in ascending order and take max
    std::sort(red_bikes.begin(), red_bikes.end(), std::greater<int>());
    int sum = 0;

    if (fastest)
    {
        std::sort(blue_bikes.begin(), blue_bikes.end(), std::less<int>());
    }
    else
    {
        std::sort(blue_bikes.begin(), blue_bikes.end(), std::greater<int>());
    }

    for (int i = 0; i < red_bikes.size(); i++)
    {
        sum += std::max(red_bikes[i], blue_bikes[i]);
    }

    return sum;
}

int main()
{
    std::vector<int> red_bikes = {3, 6, 7, 2, 1};
    std::vector<int> blue_bikes = {5, 5, 3, 9, 2};

    int result = tandem_bicycles(red_bikes, blue_bikes, false);
    std::cout << result << "\n";
}