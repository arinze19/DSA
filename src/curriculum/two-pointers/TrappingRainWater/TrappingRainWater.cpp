#include <iostream>
#include <cmath>

int trapping_rain_water(int height[], int size);

int trapping_rain_water(int height[], int size)
{
    int result = 0;
    int l = 0,
        r = size - 1,
        lMax = height[l],
        rMax = height[r];

    while (l < r)
    {
        if (height[l] < height[r])
        {
            lMax = std::max(height[l], lMax);
            result += lMax - height[l];
            l += 1;
        }
        else
        {
            rMax = std::max(height[r], rMax);
            result += rMax - height[r];
            r -= 1;
        }
    }

    return result;
}

int main()
{
    int height[6] = {4, 2, 0, 3, 2, 5};
    int result = trapping_rain_water(height, 6);

    std::cout << result << "\n";
}