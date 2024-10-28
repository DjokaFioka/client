import { FormGroup, FormControlLabel, Checkbox, Button } from "@mui/material";
import { useState } from "react";

interface Props {
    items: string[],
    checked?: string[];
    onChange: (items: string[]) => void
}

export default function CheckboxButtons({ items, checked, onChange }: Props) {
    const [checkedItems, setCheckedItems] = useState(checked || [])
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    function handleChecked(value: string) {
        const currentIndex = checkedItems.findIndex(item => item === value);
        let newChecked: string[] = [];
        if (currentIndex === - 1)
            newChecked = [...checkedItems, value];
        else
            newChecked = checkedItems.filter(item => item !== value);

        setCheckedItems(newChecked);
        onChange(newChecked);
    }

    return (
        <>
            <FormGroup>
                {(expanded ? items : items.slice(0, 3)).map((item) => (
                    <FormControlLabel
                        control={<Checkbox
                            checked={checkedItems.indexOf(item) !== -1}
                            onClick={() => handleChecked(item)}
                        />}
                        label={item}
                        key={item} />
                ))}
            </FormGroup>
            <Button onClick={handleToggle}>
                {expanded ? 'Show Less' : 'Show More'}
            </Button>
        </>
    )
}