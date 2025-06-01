import { useContext } from "react";
import { PasswordGeneratorContext } from "../context/PasswordGeneratorContextInstance";

export function usePasswordGeneratorContext() {
    const context = useContext(PasswordGeneratorContext);

    if (!context) {
        throw new Error('usePasswordGeneratorContext must be used within a HolidayProvider');
    }

    return context;
}