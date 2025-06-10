#!/usr/bin/env python3

try:
    import olca
    version = getattr(olca, '__version__', 'unknown')
    print(f"olca version: {version}")
    print(f"module location: {olca.__file__}")
except Exception as exc:
    print("olca package not found. Please run 'pip install olca' first.")
    print(exc)

