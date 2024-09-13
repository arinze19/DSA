def happy_number(num):
    cache = {}
    return happy_number_helper(num, cache)

def happy_number_helper(num, cache):
    if (num == 1):
        return True

    if (num in cache):
        return False

    cache[num] = num

    num_str = str(num)

    digits = list(num_str)

    squared = sum(int(digit) ** 2 for digit in digits)

    return happy_number_helper(squared, cache)

