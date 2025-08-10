#pragma once
#include <string>
#include <vector>
#include <memory>

namespace pl_engine {

struct BasicBlock {
    int id;
    std::vector<std::string> instructions;
    std::vector<int> successors;
    std::vector<int> predecessors;
};

struct ControlFlowGraph {
    std::vector<std::unique_ptr<BasicBlock>> blocks;
    int entry_block_id;
};

class AssemblyAnalyzer {
public:
    AssemblyAnalyzer();
    ~AssemblyAnalyzer();
    
    ControlFlowGraph analyze(const std::string& assembly_code);
    std::string optimize_peephole(const std::string& assembly_code);
    
private:
    std::vector<BasicBlock> parse_basic_blocks(const std::string& assembly);
    void build_cfg_edges(std::vector<BasicBlock>& blocks);
};

} 