import { Item, itemsEqual } from '../types';
import Sorter, { TriggerPrompt, UpdateProgress } from './sorter';

export default class InsertionSort extends Sorter<number> {
  constructor(
    items: Item[],
    triggerPrompt: TriggerPrompt,
    updateProgress: UpdateProgress<number>)
  {
    super(items, triggerPrompt, 1, updateProgress, false);
  }

  async run() {
    const items = this.items;
    // let sortedWeight = items[0].weight || 1;
    for (let i = 1; i < items.length; i++) {
      this.updateProgress(this.progress);

      const item = items[i];

      let j = i - 1;
      for (; j >= 0; j--) {
        const sortedItem = items[j];

        if (item.required) {
          if (!sortedItem.required) {
            this.swap(j + 1, j);
            continue;
          } else {
            break;
          }
        } else if (sortedItem.required) {
          break;
        }

        const [promise, prompt] = Sorter.createPrompt(item, sortedItem);
        this.triggerPrompt(prompt);
        const result = await promise;

        if (itemsEqual(result, item)) {
          this.swap(j + 1, j);
        } else {
          break;
        }
      }

      this.progress = i + 1;
    }
  }

  cancel() {
    // pass
  }
}