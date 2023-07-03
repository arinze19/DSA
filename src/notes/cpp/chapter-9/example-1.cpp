#include <iostream>
#include <iomanip>

using namespace std;

void displayPayRates(const double *rates, int size) // rates array cannot be modified due to the const keyword
{
    cout << setprecision(2) << fixed << showpoint;
    for (int count = 0; count < size; count++)
    {
        cout << "Pay rate for employee " << (count + 1) << " is $" << *(rates + count) << endl;
    }
}

int main()
{
    const int SIZE = 6;
    double rates[SIZE] = {18.55, 17.45,
                          12.85, 14.97, 10.35, 18.89};

    displayPayRates(rates, SIZE);
}