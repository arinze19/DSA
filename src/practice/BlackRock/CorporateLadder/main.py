def corporate_ladder(line):
    # Trim the input line and split by newline
    parts = line.strip().split("\n")
    
    # Extract selectedPair and organizationTree
    selected_pair = parts[0]
    organization_tree = parts[1:]
    
    # Split selected_pair into employee and manager
    employee, manager = selected_pair.split("/")
    
    # Create a dictionary to store organization structure
    organization_hash = {}
    
    # Populate the dictionary with employee-manager pairs
    for pair in organization_tree:
        emp, mgr = pair.split("/")
        organization_hash[emp] = mgr
    
    # Initialize the pointer and levels
    pointer = employee
    levels = 0
    
    # Traverse the organization ladder
    while pointer in organization_hash:
        levels += 1
        pointer = organization_hash[pointer]
        if pointer == manager:
            return levels
    
    # If the pointer is not found, return 0
    return 0