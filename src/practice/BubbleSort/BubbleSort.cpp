#include <iostream>
#include <vector>

void bubble_sort(std::vector<int> *input)
{
    bool isSorted = false;
    while (!isSorted)
    {
        isSorted = true;
        for (int i = 0; i < (*input).size(); i++)
        {
            if ((*input)[i] > (*input)[i + 1])
            {
                isSorted = false;
                int temp = (*input)[i];

                (*input)[i] = (*input)[i + 1];
                (*input)[i + 1] = temp;
            }
        }
    }
}

int main()
{
    std::vector<int> input = {8, 5, 2, 9, 5, 6, 3};
    std::string result = "";

    bubble_sort(&input);

    for (int i = 0; i < input.size(); i++)
    {
        result += input[i];
    }

    std::cout << result << "\n";
}