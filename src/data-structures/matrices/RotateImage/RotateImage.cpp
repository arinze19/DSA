#include <iostream>
using namespace std;

void rotate(int matrix[3][3])
{
    int left = 0;
    int right = 3 - 1;

    while (left < right)
    {
        int top = left;
        int bottom = right;

        for (int i = 0; i < right - left; i++)
        {
            int temp = matrix[top][left + i];

            matrix[top][left + i] = matrix[bottom - i][left];
            matrix[bottom - i][left] = matrix[bottom][right - i];
            matrix[bottom][right - i] = matrix[top + i][right];

            matrix[top + i][right] = temp;
        }

        left += 1;
        right -= 1;
    }
}

int main()
{
    int input[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};

    rotate(input);
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            cout << input[i][j] << "\t";
        }

        cout << "\n";
    }
}