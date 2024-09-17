import { List, ListItem } from "@tremor/react";
import AddGameForm from "./addgame/Form";
import Modal from "./ui/Modal";
export default function ItemsList({ items, setGames }) {
	return (
		<>
			<List className="mt-2 ">
				{items.map((item) => (
					<ListItem key={item.name}>
						<span>{item.name}</span>
						<span></span>
						<span className="actions">
							<Modal buttonType="edit">
								<AddGameForm
									setGames={setGames}
									games={items}
									editGame={item}
								/>
							</Modal>
						</span>
					</ListItem>
				))}
			</List>
      <Modal buttonType="add">
          <AddGameForm
            setGames={setGames}
            games={items}
          />
        </Modal>
		</>
	);
}
