#include <iostream>
#include <iomanip>
#include <string>

int main()
{
    // float distance;
    // double mass;

    // distance = 1.495979E11;
    // mass = 1.989E30;

    // std::cout << "The Sun is " << distance << " meters away.\n";
    // std::cout << "The Sun\'s mass is " << mass << " kilograms.\n";

    // float calculate = 5 / 2.0;
    // std::cout << "The result is " << calculate << std::endl;
    const int LIMIT = 7;
    for (int i = 1; i < 5; i += 2)
    {
        std::cout << std::setw(i);

        for (int j = 0; j < i; j++)
        {
            std::cout << "*";
        }

        std::cout << std::endl;
    }
}