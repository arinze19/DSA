#include <iostream>
#include <iomanip>

int main()
{
    double numerator, denominator;

    std::cout << "Enter the numerator: " << std::endl;
    std::cin >> numerator;
    std::cout << "Enter the denominator: " << std::endl;
    std::cin >> denominator;

    std::cout << (numerator / denominator) << std::endl;
    return 0;
}