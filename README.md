# Phase1-A-Deeeep-Introduction-to-Competitive-Programming

Phase - 1 A Deeeep Introduction to Competitive Programming (YouKn0wWho Academy)

- Links
  - https://academy.shahjalalshohag.com/course/a-complete-guideline-to-competitive-programming-phase-1
  - https://academy.shahjalalshohag.com

Joined on: Apr 24, 2022

## 00 How to Take this Course

- Major online contests
  - Codeforces Div. 3, Div. 2,
  - Atcoder Beginner Contest (ABC),
  - Codechef Div. 3, Div. 2

## 01. Introduction to Competitive Programming

- Notes
  - log(a^b) = b log(a)
- Reading Materials
  - How to use Codeforces blog: https://codeforces.com/blog/entry/99660
  - What is the key to CP? blog: https://codeforces.com/blog/entry/47516
  - Competitive Programmer’s Handbook book: https://cses.fi/book/book.pdf
  - Logarithm rules: https://www.chilimath.com/lessons/advanced-algebra/logarithm-rules/
- [x] Contest 01: Data type - Conditions
  - https://codeforces.com/group/MWSDmqGsZm/contest/219158
  - 26/26
- [x] Contest 02: Loops
  - https://codeforces.com/group/MWSDmqGsZm/contest/219432
  - 26/26
- [x] Contest 03: Introduction to CP
  - https://vjudge.net/contest/468964
  - 18/18
- [x] Total Solve: 70/70

## 02. Warm-up

- Topics
  - [x] Bit Masking
  - [x] 2's Complement
  - [x] Subarrays, Subsequences and Substrings
- Notes
  - `int` capacity: `-2 * 10^9` to `2 * 10^9`
  - `long long int` capacity: `-9 * 10^18` to `9 * 10^18`
  - `10^8` operation -> `1second`
  - `10^10` operation -> `10^10/10^8` or `100seconds`
  - `n << k` -> `n * 2^k`
  - `n >> k` -> `n / 2^k`
  - 2'complement of `~N` = `-((~(~N))+1)` = `-(N+1)`
  - positive integers: `>= 1` and non-negative integers: `>=0`
- Reading Materials
  - Header files in C/C++ and its uses: https://www.geeksforgeeks.org/header-files-in-c-cpp-and-its-uses/
  - What does 'using namespace std' mean in C++?: https://www.quora.com/What-does-using-namespace-std-mean-in-C++
  - Floor, Ceil, Round and Setprecision: https://www.geeksforgeeks.org/precision-of-floating-point-numbers-in-c-floor-ceil-trunc-round-and-setprecision/
  - Double and Precision Issues: https://codeforces.com/blog/entry/
  - ++n vs n++: https://www.quora.com/What-is-the-difference-between-n-and-n-
  - Time Complexity 1: https://www.mygreatlearning.com/blog/why-is-time-complexity-essential/
  - Time Complexity 2: https://www.geeksforgeeks.org/understanding-time-complexity-simple-examples/
  - Time Complexity 3: https://codeforces.com/blog/entry/21344?f0a28=1
  - [x] Bitwise operations (bit masking): https://codeforces.com/blog/entry/73490
  - [x] Bitwise Operators in C/C++ : https://www.geeksforgeeks.org/bitwise-operators-in-c-cpp/
  - [x] Bitwise Operators in C Programming: https://www.programiz.com/c-programming/bitwise-operators
  - [x] https://code.tutsplus.com/articles/understanding-bitwise-operators--active-11301
  - [x] https://www.hackerearth.com/practice/basic-programming/bit-manipulation/basics-of-bit-manipulation/tutorial/
  - Arrays, Subarrays and Subsequences 1: https://www.geeksforgeeks.org/arrays-in-c-cpp/
  - Arrays, Subarrays and Subsequences 2: https://www.techiedelight.com/difference-between-subarray-subsequence-subset/
  - Arrays, Subarrays and Subsequences 3: https://www.geeksforgeeks.org/subarraysubstring-vs-subsequence-and-programs-to-generate-them/
  - Strings, Substrings and Subsequences 1: https://www.javatpoint.com/cpp-strings
  - Strings, Substrings and Subsequences 2: https://www.geeksforgeeks.org/stdstring-class-in-c/
  - Strings, Substrings and Subsequences 3: https://www.geeksforgeeks.org/subarraysubstring-vs-subsequence-and-programs-to-generate-them/
- [x] Problems: Bit masking
  - [x] https://codeforces.com/problemset/problem/1097/B
  - [x] https://codeforces.com/problemset/problem/550/B
- [x] Contest 01: Warm-up
  - https://vjudge.net/contest/469318
  - 18/18
- [x] Contest 02: Arrays
  - https://codeforces.com/group/MWSDmqGsZm/contest/219774
  - 26/26
- Contest 03: Strings
  - https://codeforces.com/group/MWSDmqGsZm/contest/219856
  - 21/26
- [x] Total Solve: 65/70

## 03. More Warm-up

- Notes
  - `log6(x) = log_e(x) / log_e(6)`
  - xor Trick
    ```c++
    x ^ 0 == x
    x ^ y == 0 // x == y
    x ^ y == y ^ x
    a ^ b == c ^ d;
    a ^ b ^ b == c ^ d ^ b;
    a = c ^ d ^ b;
    ```
    ```c++
       a ^ b ^ c ^ a ^ b     # Commutativity
     = a ^ a ^ b ^ b ^ c     # Using x ^ x = 0
     = 0 ^ 0 ^ c             # Using x ^ 0 = x (and commutativity)
     = c
    ```
    ```c++
    // swap two number
    x = x ^ y; // =>                      (x ^ y, y)
    y = x ^ y; // => (x ^ y, x ^ y ^ y) = (x ^ y, x)
    x = x ^ y; // => (x ^ y ^ x, x)     = (y, x)
    ```
- Reading Materials
  - Swap two numbers without using a temporary variable: https://www.geeksforgeeks.org/swap-two-numbers-without-using-temporary-variable/
  - Prefix Sum 01: https://usaco.guide/silver/prefix-sums?lang=cpp
  - Prefix Sum 02: https://codeforces.com/blog/entry/59915
  - [x] The XOR Trick: https://florian.github.io/xor-trick
  - Function: https://www.programiz.com/cpp-programming/function
  - Recursion 01: https://www.geeksforgeeks.org/recursion/
  - Recursion 02: http://zobayer.blogspot.com/2009/12/cse-102-attacking-recursion.html
  - Recursion 03: http://zobayer.blogspot.com/2009/12/cse-102-practice-recursions.html
  - How Codeforces Contests Work: https://codeforces.com/blog/entry/456
  - Codeforces: Problem Difficulties: https://codeforces.com/blog/entry/62865
- [x] Contest 01: Functions
  - https://codeforces.com/group/MWSDmqGsZm/contest/223205
  - 15/15
- Contest 02: Recursion
  - https://codeforces.com/group/MWSDmqGsZm/contest/223339
  - 24/26
- Contest 03: More Warm-up
  - https://vjudge.net/contest/470109
  - 12/16
- [x] Total Solve: 51/57

## 04. Saviors

- Link: https://youtu.be/fnZcWmX3sKg
- Topics
  - auto, pair, tuple,
  - pointer, vector, iterator, list
  - stack, queue, deque, priority_queue
  - set, unordered_set, multiset
  - map, unordered_map
  - stringstream
  - Sliding Window
- Notes
  - `typeid` operator in c++
- Reading Materials
  - Type Inference in C++ (auto and decltype): https://www.geeksforgeeks.org/type-inference-in-c-auto-and-decltype/
  - std::pair::pair: https://www.cplusplus.com/reference/utility/pair/pair
  - std::tuple: https://www.cplusplus.com/reference/tuple/tuple/
  - Structures in C++: https://www.geeksforgeeks.org/structures-in-cpp/
  - Pointers in C/C++ with Examples: https://www.geeksforgeeks.org/pointers-c-examples/
  - std::string: https://www.cplusplus.com/reference/string/string/
  - Multidimensional Arrays in C / C++: https://www.geeksforgeeks.org/multidimensional-arrays-c-cpp/
  - std::vector: https://www.cplusplus.com/reference/vector/vector/
  - std::list: https://www.cplusplus.com/reference/list/list/
  - std::stack: https://www.cplusplus.com/reference/stack/stack/
  - std::queue: https://www.cplusplus.com/reference/queue/queue/
  - std::deque: https://www.cplusplus.com/reference/deque/deque/
  - std::priority_queue: https://www.cplusplus.com/reference/queue/priority_queue/
  - std::set: https://www.cplusplus.com/reference/set/set/
  - std::unordered_set: https://www.cplusplus.com/reference/unordered_set/unordered_set/
  - std::multiset: https://www.cplusplus.com/reference/set/multiset/
  - std::map: https://www.cplusplus.com/reference/map/map/
  - std::unordered_map: https://www.cplusplus.com/reference/unordered_map/unordered_map/
  - Blowing up unordered_map, and how to stop getting hacked on it: https://codeforces.com/blog/entry/62393?f0a28=1
- Problems:
  - [x] CodeForces: 1614A. Divan and a Store: https://codeforces.com/contest/1614/problem/A
- Contest 01: Introduction to CP
  - https://vjudge.net/contest/470780
  - 22/26

## 05. Sort Your Life Out


- Link: https://youtu.be/6uR5Ea_yakY
- Binary Search
  - Topics
    - Lower Bound and Upper Bound
    - Rotated Array with Binary search
    - Max in a Hill
  - Problems
    - [x] CodeForce A. Binary Search: https://codeforces.com/edu/course/2/lesson/6/1/practice/contest/283911/problem/A
    - [x] CodeForce edu Binary search step 1 practice: https://codeforces.com/edu/course/2/lesson/6/1/practice
    - CodeForce edu Binary search step 2 practice: https://codeforces.com/edu/course/2/lesson/6/2/practice
    - CodeForce edu Binary search step 3 practice: https://codeforces.com/edu/course/2/lesson/6/3/practice
    - [x] CodeForce C. K-th Not Divisible by n: https://codeforces.com/problemset/problem/1352/C
    - YouKn0wWho Academy: Sort Your Life Out: https://vjudge.net/contest/471184
  - Tutorials
    - CodeForce edu Binary search theory: https://codeforces.com/edu/course/2/lesson/6
    - std::upper_bound and std::lower_bound for Vector in C++ STL: https://www.geeksforgeeks.org/upper_bound-and-lower_bound-for-vector-in-cpp-stl/
    - Greedy and Searching: BAPS - BACS Online Programming Camp, 2020: https://youtu.be/IKDtlUMW7F4?list=PLWtSipmftM8qbtfj2WkoQ7Z9ZrhCl6rPz&t=6665
    - Synapse Beginner Class-10-Searching: https://youtu.be/1m2Ab_cB68o
    - Synapse Beginner Class 11 - Binary Search Problem Disscussion (06 October, 2021): https://youtu.be/4JVO_U34UxM
