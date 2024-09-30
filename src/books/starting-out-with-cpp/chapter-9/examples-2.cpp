#include <iostream>
#include <iomanip>

using namespace std;

int main()
{
    double average, total;
    int size = 0;
    // get size from user
    cout << "How many days of sales figure do you want to process? "
         << "\n";
    cin >> size;
    // dynamically allocate memory based on the size of the input
    int *ptr = new int[size];
    // get average and delete memory
    for (int i = 0; i < size; i++)
    {
        cout << "Enter sales for day " << i + 1 << ": ";
        cin >> ptr[i];
    }

    for (int i = 0; i < size; i++)
    {
        // add to total
        total += ptr[i];
    }

    average = total / size;
    cout << "Average sales: " << fixed << setprecision(2) << average << endl;
    // delete memory
    delete[] ptr;
    ptr = nullptr;
    return 0;
}