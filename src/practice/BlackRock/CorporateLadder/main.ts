const corporateLadder = (line: string) => {
    const [selectedPair, ...organizationTree] = line.trim().split("\n");
    const [employee, manager] = selectedPair.split("/");
    const organizationHash: Record<string, string> = {};

    let pointer = employee;
    let levels = 0;

    for (const pair of organizationTree) {
        const [employee, manager] = pair.split("/");

        organizationHash[employee] = manager;
    }

    // pointer
    do {
        levels += 1;
        pointer = organizationHash[pointer]
    } while (pointer && pointer !== manager)

    if (!pointer) return 0;

    return levels;
}

/**
 * Susan/Amy
Susan/John
John/Amy
 */

console.log(corporateLadder(`Susan/Labille
Jerry/John
Labille/John
John/Amy`))