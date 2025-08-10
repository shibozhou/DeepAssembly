cmake_minimum_required(VERSION 3.10)
project(PLEngine)

set(CMAKE_CXX_STANDARD 17)

# Find packages
find_package(Threads REQUIRED)

# Include directories
include_directories(${CMAKE_CURRENT_SOURCE_DIR}/src)

# Source files
set(SOURCES
    src/main.cpp
    src/analyzer.cpp
)

# Create executable
add_executable(pl_engine ${SOURCES})

# Link libraries
target_link_libraries(pl_engine ${CMAKE_THREAD_LIBS_INIT})

# Tests
enable_testing()
add_subdirectory(tests)