#include <iostream>
#include <vector>
#include <algorithm>

int container_with_most_water(std::vector<int> height)
{
    int left = 0;
    int right = height.size() - 1;
    int currentArea = std::min(height[left], height[right]) * right - left;

    while (left < right)
    {
        if (height[left] <= height[right])
        {
            left += 1;
        }
        else if (height[left] > height[right])
        {
            right -= 1;
        }

        currentArea = std::max(
            currentArea,
            std::min(height[left], height[right]) * (right - left));
    }

    return currentArea;
}

int main()
{
    std::vector<int> heights {1, 8, 6, 2, 5, 4, 8, 3, 7};
    int result = container_with_most_water(heights);

    std::cout << result << "\n";
}