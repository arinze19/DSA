#include <iostream>
using namespace std;

int main()
{
    double hours, rate, pay;

    // get number of hours worked
    cout << "How many hours did you work? ";
    cin >> hours;

    // get hourly pay rate
    cout << "How much do you get paid per hour? ";
    cin >> rate;

    // calculate pay
    pay = hours * rate;

    // display pay
    cout << "You have earned $" << pay << endl;
}